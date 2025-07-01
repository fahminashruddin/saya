"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

export default function OrderForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section
      className="min-h-screen py-16 lg:py-24 flex items-center justify-center"
      id="kontak"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Start a Project
              </CardTitle>
              <p className="text-gray-400 text-lg">
                Tell me about your vision and let's bring it to life together
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-white font-medium">
                    WhatsApp Number{" "}
                    <span className="text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </Label>
                  <Input
                    id="whatsapp"
                    type="text"
                    placeholder="+62 812 3456 7890"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Type of Service */}
                <div className="space-y-2">
                  <Label
                    htmlFor="serviceType"
                    className="text-white font-medium"
                  >
                    Type of Service
                  </Label>
                  <Select required>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem
                        value="web-design"
                        className="text-white hover:bg-gray-600"
                      >
                        Web Design
                      </SelectItem>
                      <SelectItem
                        value="content-writing"
                        className="text-white hover:bg-gray-600"
                      >
                        Content Writing
                      </SelectItem>
                      <SelectItem
                        value="logo-design"
                        className="text-white hover:bg-gray-600"
                      >
                        Logo Design
                      </SelectItem>
                      <SelectItem
                        value="digital-marketing"
                        className="text-white hover:bg-gray-600"
                      >
                        Digital Marketing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Label
                    htmlFor="projectDetails"
                    className="text-white font-medium"
                  >
                    Tell me about your project
                  </Label>
                  <Textarea
                    id="projectDetails"
                    placeholder="Describe your project goals, requirements, timeline, and any specific details you'd like to share..."
                    required
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fileUpload"
                    className="text-white font-medium"
                  >
                    Attach a file{" "}
                    <span className="text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </Label>
                  <div className="relative">
                    <input
                      id="fileUpload"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-gray-500 transition-colors bg-gray-700/50"
                    >
                      <div className="text-center">
                        {selectedFile ? (
                          <div className="flex items-center gap-2 text-green-400">
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium">
                              {selectedFile.name}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <Upload className="w-8 h-8 text-gray-400" />
                            <div className="text-sm text-gray-400">
                              <span className="font-medium text-blue-400">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </div>
                            <div className="text-xs text-gray-500">
                              PDF, DOC, TXT, JPG, PNG (max 10MB)
                            </div>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send My Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
