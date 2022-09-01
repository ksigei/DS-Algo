def recursion(n)
  if n == 0
    return 0
  else
    return n + recursion(n-1)
  end
end

puts recursion(5)
# => 15
# => 5 + recursion(4)
# => 5 + 4 + recursion(3)
# => 5 + 4 + 3 + recursion(2)
# => 5 + 4 + 3 + 2 + recursion(1)
# => 5 + 4 + 3 + 2 + 1 + recursion(0)