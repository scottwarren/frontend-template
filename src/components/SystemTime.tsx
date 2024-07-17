const now = new Date()

export function SystemTime() {
  const time = now.toLocaleTimeString()
  const date = now.toLocaleDateString()

  return (
    <div>
      {time}, {date}
    </div>
  )
}
