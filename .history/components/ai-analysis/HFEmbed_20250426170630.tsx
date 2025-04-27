'use client'

import { useState } from 'react'
import { predictTreeMask } from '@/app/huggingface-api' // مسار استدعاء الدالة اللي كتبناها

export async function predictTreeMask(imageFile: File, task: "desertification" | "tree-density") {
    const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN;
  
    // نحدد رابط الموديل حسب نوع المهمة
    const modelUrl = task === "tree-density"
      ? "https://api-inference.huggingface.co/models/thiagohersan/maskformer-satellite-trees-gradio"
      : "https://api-inference.huggingface.co/models/thiagohersan/maskformer-satellite-trees-gradio"; // تقدر تغير لو عندك رابط ثاني لـ التصحر لاحقاً
  
    if (!apiKey) {
      throw new Error("Missing Hugging Face API token. Please check your .env.local file.");
    }
  
    const formData = new FormData();
    formData.append("file", imageFile);
  
    const response = await fetch(modelUrl, {
      method: "POST",
      headers: {
        Authorization: Bearer ${apiKey},
      },
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prediction: ${response.statusText}`);
    }
  
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }