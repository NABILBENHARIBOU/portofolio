import React, { useEffect, useState } from 'react'

type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholder?: string
}

const DEFAULT_PLACEHOLDER_SVG = (w = 16, h = 12, color = '#e6eefc') =>
  `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><rect width='100%' height='100%' fill='${color}'/></svg>`

function svgToDataUrl(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function generatePlaceholder(width = 16, height = 12, color = '#e6eefc') {
  return svgToDataUrl(DEFAULT_PLACEHOLDER_SVG(width, height, color))
}

export function preloadImage(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (!src) return resolve()
    const img = new Image()
    img.src = src
    if (img.complete) return resolve()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to preload ${src}`))
  })
}

export function useImageFallback(initialSrc: string | undefined, fallback?: string) {
  const [src, setSrc] = useState<string | undefined>(initialSrc)

  useEffect(() => {
    setSrc(initialSrc)
  }, [initialSrc])

  const onError = () => setSrc(fallback ?? generatePlaceholder())

  return { src, onError, setSrc }
}

export function OptimizedImage({ src, alt, className, style, placeholder, ...rest }: OptimizedImageProps) {
  const { src: currentSrc, onError } = useImageFallback(src as string | undefined, placeholder ?? generatePlaceholder())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [currentSrc])

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className={className}>
      {/* placeholder shown behind the main image until loaded */}
      <img
        src={placeholder ?? generatePlaceholder()}
        alt={alt ?? ''}
        aria-hidden
        style={{
          display: loaded ? 'none' : 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(6px)'
        }}
      />

      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 160ms ease-in-out',
          opacity: loaded ? 1 : 0,
          position: 'relative'
        }}
        onLoad={() => setLoaded(true)}
        onError={onError}
        {...rest}
      />
    </div>
  )
}

export default OptimizedImage
