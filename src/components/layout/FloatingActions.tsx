"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingActions() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <a
                href="https://wa.me/919133533289" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
            </a>
        </div>
    );
}
