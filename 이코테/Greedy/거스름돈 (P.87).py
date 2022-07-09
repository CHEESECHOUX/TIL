n = int(input())
count = 0

coin_types = [500, 100, 50, 10] #큰 단위 화폐부터 

for coin in coin_types:
  count += n // coin
  n %= coin
  
print(count)
