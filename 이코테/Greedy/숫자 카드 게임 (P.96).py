##
#min() 함수를 이용
n, m = map(int, input().split())
result = 0

for i in range(n):
    data = list(map(int, input().split()))
    min_card = min(data)
    result = max(min_card)
print(result)
##
#2중 반복문 구조를 이용
n, m = map(int, input().split())
result = 0

for i in range(n):
    data = list(map(int, input().split()))
    min_card = 10001
    for a in data:
        min_card(min_card, a)

    result = max(result, min_card)
print(result)
##
