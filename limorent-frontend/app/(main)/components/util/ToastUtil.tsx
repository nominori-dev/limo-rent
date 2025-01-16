"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
} from "@/app/(main)/components/ui/toast";

type ToastData = {
    id: string;
    title: string;
    description: string;
    variant?: "default" | "destructive";
};

type ToastContextType = {
    toasts: ToastData[];
    addToast: (toast: Omit<ToastData, "id">) => void;
    removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = (toast: Omit<ToastData, "id">) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((current) => [...current, { id, ...toast }]);
    };

    const removeToast = (id: string) => {
        setToasts((current) => current.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            <ToastProvider>
                {children}
                <ToastViewport>
                    {toasts.map(({ id, title, description, variant }) => (
                        <Toast
                            key={id}
                            variant={variant}
                            onOpenChange={(open) => !open && removeToast(id)}
                        >
                            <ToastTitle>{title}</ToastTitle>
                            <ToastDescription>{description}</ToastDescription>
                            <ToastClose />
                        </Toast>
                    ))}
                </ToastViewport>
            </ToastProvider>
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastContextProvider");
    }
    return context;
};
