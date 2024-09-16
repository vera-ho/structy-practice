def uncompress(s):
  nums = '1234567890'
  result = []

  number = 0
  for char in s:
    if char in nums:
      number = (number * 10) + int(char)
    else:
      result.append(char * number)
      number = 0

  return ''.join(result)

# uncompress("2c3a1t") # -> 'ccaaat'
# uncompress("4s2b") # -> 'ssssbb'
# uncompress("2p1o5p") # -> 'ppoppppp'
# uncompress("3n12e2z") # -> 'nnneeeeeeeeeeeezz'
# uncompress("127y") # -> 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
