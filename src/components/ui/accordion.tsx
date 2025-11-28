import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

const AccordionContext = React.createContext<{
    openItem: string | null
    toggleItem: (value: string) => void
} | null>(null)

export const Accordion = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const [openItem, setOpenItem] = React.useState<string | null>(null)
    return (
        <AccordionContext.Provider value={{ openItem, toggleItem: (val) => setOpenItem(prev => prev === val ? null : val) }}>
            <div className={cn("w-full", className)}>{children}</div>
        </AccordionContext.Provider>
    )
}

export const AccordionItem = ({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) => {
    const context = React.useContext(AccordionContext)
    const isOpen = context?.openItem === value

    return (
        <div className={cn("border-b", className)}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { isOpen, onToggle: () => context?.toggleItem(value) })
                }
                return child
            })}
        </div>
    )
}

export const AccordionTrigger = ({ children, className, isOpen, onToggle }: any) => (
    <button
        onClick={onToggle}
        className={cn(
            "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline",
            className
        )}
    >
        {children}
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
)

export const AccordionContent = ({ children, className, isOpen }: any) => (
    <AnimatePresence initial={false}>
        {isOpen && (
            <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
            >
                <div className={cn("pb-4 pt-0 text-sm text-muted-foreground", className)}>{children}</div>
            </motion.div>
        )}
    </AnimatePresence>
)
