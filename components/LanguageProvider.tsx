"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translate } from "@/lib/i18n";

type LanguageCtx = { t: (path: string) => string };
const Ctx = createContext<LanguageCtx>({ t: translate });

export default function LanguageProvider({ children }: { children: ReactNode }) {
  return <Ctx.Provider value={{ t: translate }}>{children}</Ctx.Provider>;
}

export function useLanguage(): LanguageCtx { return useContext(Ctx); }
