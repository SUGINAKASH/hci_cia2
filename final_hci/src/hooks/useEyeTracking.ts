import { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

export function useEyeTracking() {
  const [isUserPresent, setIsUserPresent] = useState(true);
  const webcamRef = useRef<Webcam | null>(null);
  const modelRef = useRef<faceLandmarksDetection.FaceLandmarksDetector | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let lastDetectionTime = Date.now();

    async function loadModel() {
      await tf.setBackend('webgl');
      modelRef.current = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
      );
    }

    async function detectFace() {
      if (!webcamRef.current?.video || !modelRef.current) return;

      try {
        const predictions = await modelRef.current.estimateFaces({
          input: webcamRef.current.video
        });

        const currentTime = Date.now();
        setIsUserPresent(predictions.length > 0);

        if (predictions.length === 0 && currentTime - lastDetectionTime > 5000) {
          setIsUserPresent(false);
        } else if (predictions.length > 0) {
          lastDetectionTime = currentTime;
        }

        animationFrame = requestAnimationFrame(detectFace);
      } catch (error) {
        console.error('Face detection error:', error);
      }
    }

    loadModel().then(() => {
      detectFace();
    });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return { isUserPresent };
}