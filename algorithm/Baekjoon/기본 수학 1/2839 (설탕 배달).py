##
#내가 풀어본 코드

n = int(input())
bag = 0

if bag / 5 != 0 or bag / 3!= 0:
    print('-1')

while bag >= 5:
    bag += n // 5
    if 3 <= bag < 5:
        bag += bag // 3

print(bag)
##


#정답
n = int(input())
bag = 0

while n >= 0: 
    if n % 5 == 0: #5의 배수라면
        bag += (sugar // 5)
        print(bag)
        break
    n -= 3
    bag += 1 #5의 배수가 될 때까지 설탕 -3, 봉지+1
else:
    print(-1)  
##
