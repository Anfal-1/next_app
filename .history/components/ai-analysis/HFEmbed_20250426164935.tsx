'use client'

import { useState } from "react"
import { predictTreeMask } from "@/app/huggingface-api" // مسار استدعاء الدالة اللي كتبناها

export function SimpleTreeAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedTask, setSelectedTask] = useState<"desertification" | "tree-density">("desertification");
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResultUrl(null); // عشان تمسحين الصورة القديمة لو فيه تحليل قديم
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);
      setError(null);
      const url = await predictTreeMask(selectedFile, selectedTask);
      setResultUrl(url);
    } catch (err: any) {
      console.error(err);
      setError