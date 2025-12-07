import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export interface PricingOption {
    hours: string
    price: string
    popular?: boolean
}

export interface PricingFormulaProps {
    title?: string
    emoji?: string
    description?: string
    options: PricingOption[]
    features: string[]
    columns?: 1 | 2 | 3 | 4
    highlight?: boolean
    highlightColor?: 'accent' | 'primary'
}

export function PricingFormula({
    title,
    emoji,
    description,
    options,
    features,
    columns = 3,
    highlight = false,
    highlightColor = 'accent'
}: PricingFormulaProps) {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    }

    return (
        <section className="mb-16">
            {title && (
                <h2 className="text-3xl font-bold mb-2">
                    {emoji && <span className="mr-2">{emoji}</span>}
                    {title}
                </h2>
            )}
            {description && (
                <p className="text-muted-foreground mb-8">{description}</p>
            )}

            <div className={`grid ${gridCols[columns]} gap-6 ${columns === 1 ? 'max-w-md mx-auto' : columns === 2 ? 'max-w-3xl mx-auto' : ''}`}>
                {options.map((option, index) => (
                    <Card
                        key={index}
                        className={`${option.popular ? 'border-2 border-accent shadow-xl' : ''} ${highlight && options.length === 1 ? `border-2 border-${highlightColor} shadow-xl` : ''}`}
                    >
                        <CardHeader className="text-center">
                            {option.popular && (
                                <div className="bg-accent text-accent-foreground text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2 mx-auto">
                                    Populaire
                                </div>
                            )}
                            <CardTitle className="text-2xl">{option.hours}</CardTitle>
                            <CardDescription>
                                <span className="text-4xl font-bold text-foreground">{option.price} €</span>
                                <span className="text-muted-foreground"> TTC</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full mt-6"
                                variant={option.popular || highlight ? "default" : "outline"}
                                asChild
                            >
                                <Link to="/booking">Réserver</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
