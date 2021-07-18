export function replace(input :string, begin :string, end :string) :string {
  const replaces = [
    {
      from: /（/g,
      to: begin,
    },
    {
      from: /）/g,
      to: end,
    },
  ]
  let out = input
  for (let i = 0; i < replaces.length; i++) {
    const re = replaces[i]
    out = out.replace(re.from, re.to)
  }
  return out
}
