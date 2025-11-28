import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { supabase } from '../lib/supabase'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const bookingSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(10, 'Numéro de téléphone invalide'),
    date: z.string().min(1, 'Veuillez sélectionner une date'),
    license_type: z.string().min(1, 'Veuillez sélectionner un type de permis'),
})

type BookingFormData = z.infer<typeof bookingSchema>

export default function Booking() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    })

    const onSubmit = async (data: BookingFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const { error } = await supabase
                .from('appointments')
                .insert([data])

            if (error) throw error

            setSubmitStatus('success')
            reset()
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Drive Hours - Réservation</title>
                <meta name="description" content="Réservez votre leçon de conduite avec Drive Hours. Remplissez le formulaire et nous vous recontacterons rapidement." />
            </Helmet>
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Réserver une leçon</h1>
                    <p className="text-muted-foreground">
                        Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour confirmer votre rendez-vous.
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Formulaire de réservation</CardTitle>
                        <CardDescription>Toutes les informations sont obligatoires</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nom complet
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Jean Dupont"
                                    {...register('name')}
                                    className={errors.name ? 'border-destructive' : ''}
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jean.dupont@example.com"
                                    {...register('email')}
                                    className={errors.email ? 'border-destructive' : ''}
                                />
                                {errors.email && (
                                    <p className="text-sm text-destructive">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Téléphone
                                </label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="06 12 34 56 78"
                                    {...register('phone')}
                                    className={errors.phone ? 'border-destructive' : ''}
                                />
                                {errors.phone && (
                                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Date */}
                            <div className="space-y-2">
                                <label htmlFor="date" className="text-sm font-medium">
                                    Date souhaitée
                                </label>
                                <Input
                                    id="date"
                                    type="date"
                                    {...register('date')}
                                    className={errors.date ? 'border-destructive' : ''}
                                />
                                {errors.date && (
                                    <p className="text-sm text-destructive">{errors.date.message}</p>
                                )}
                            </div>

                            {/* License Type */}
                            <div className="space-y-2">
                                <label htmlFor="license_type" className="text-sm font-medium">
                                    Type de permis
                                </label>
                                <select
                                    id="license_type"
                                    {...register('license_type')}
                                    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors.license_type ? 'border-destructive' : ''
                                        }`}
                                >
                                    <option value="">Sélectionnez un type</option>
                                    <option value="B">Permis B (Voiture)</option>
                                    <option value="A">Permis A (Moto)</option>
                                    <option value="AAC">Conduite Accompagnée (AAC)</option>
                                    <option value="AM">Permis AM (Cyclomoteur)</option>
                                </select>
                                {errors.license_type && (
                                    <p className="text-sm text-destructive">{errors.license_type.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Envoi en cours...' : 'Réserver'}
                            </Button>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-md dark:bg-green-900/20 dark:text-green-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <p className="text-sm">Votre demande a été envoyée avec succès ! Nous vous recontacterons bientôt.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-md dark:bg-red-900/20 dark:text-red-400">
                                    <AlertCircle className="h-5 w-5" />
                                    <p className="text-sm">Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</p>
                                </div>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
