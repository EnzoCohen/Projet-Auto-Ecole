export function Logo() {
    return (
        <div className="flex flex-col leading-none select-none" style={{ transform: 'scale(1.2)', transformOrigin: 'left center', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="text-4xl font-bold tracking-wide font-harlekin text-white" style={{ letterSpacing: '0.15rem' }}>
                Auto Ecole
            </span>
            <span className="text-base font-yellowtail font-semibold text-accent" style={{ paddingLeft: '7.6rem', marginTop: '-0.875rem' }}>
                Drive Hours
            </span>
        </div>
    )
}
