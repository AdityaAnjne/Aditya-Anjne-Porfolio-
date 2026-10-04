"use client";
import { createContext, useContext } from "react";
import { translate } from "@/lib/i18n";
const Ctx = createContext({ t: translate });
export default function LanguageProvider({ children }) {
    return <Ctx.Provider value={{ t: translate }}>{children}</Ctx.Provider>;
}
export function useLanguage() { return useContext(Ctx); }
