def is_prime(n):
  if (n <= 1):
    return False

  for num in range(2, n):
    if (n % num == 0):
      return False

  return True

# is_prime(2) # -> True
# is_prime(3) # -> True
# is_prime(4) # -> False
# is_prime(5) # -> True
# is_prime(6) # -> False
# is_prime(7) # -> True
# is_prime(8) # -> False
# is_prime(25) # -> False
# is_prime(31) # -> True
# is_prime(2017) # -> True
# is_prime(2048) # -> False
# is_prime(1) # -> False
# is_prime(713) # -> False
