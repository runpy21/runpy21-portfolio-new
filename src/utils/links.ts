export function safeExternalUrl(value: string | null | undefined): string | undefined {
  if (!value?.trim()) return undefined

  try {
    const url = new URL(value.trim())
    if (
      (url.protocol !== 'https:' && url.protocol !== 'http:') ||
      url.username ||
      url.password
    ) {
      return undefined
    }
    return url.toString()
  } catch {
    return undefined
  }
}

export function safeEmail(value: string | null | undefined): string | undefined {
  const email = value?.trim()
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ? email
    : undefined
}

export function safeLocalAssetPath(
  value: string | null | undefined,
): string | undefined {
  const path = value?.trim()
  if (!path || !path.startsWith('/') || path.startsWith('//')) return undefined

  try {
    const decodedPath = decodeURIComponent(path.split(/[?#]/, 1)[0])
    if (
      decodedPath.startsWith('//') ||
      decodedPath.includes('\\') ||
      decodedPath.split('/').includes('..')
    ) {
      return undefined
    }
  } catch {
    return undefined
  }
  return path
}
