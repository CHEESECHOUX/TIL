##
#내가 생각한 로직 : n이하의 수 중에서 소수를 구해 n을 그 소수로 나누기

n = int(input())
list = []
result = []

if n == 1:
    print('')

else:
    for num in range(2, n+1):
        if num == 2:
            list.append(num)
        else:
            for i in range(2, num):
                if i % num == 0:
                    list.append(num)

list_a = list.sort() #작은수부터 정렬해서

for x in map(int, list_a):
    if n % list_a[0] == 0:
        result.append(list_a[0]) #작은수를 반복해서... 어케 나누지
    else:      
##


##
#정답 1 : 소수를 구할 필요 없이 그냥 작은 값부터 나누면 됐다,,
n = int(input())

if n == 1:
    print('')

for i in range(2, n+1): #2부터 하나씩 나누기
    if n % i == 0:
        while n % i == 0: #해당 숫자로 나눌 수 없을 때까지 나누기
            print(i)
            n = n / i #for문을 통해 다음 숫자로 가기

            
#정답 2 : 정답이긴 하나 비효율적이다. 3번이 시간이 훨씬 빠르다
n = int(input())  # 나누어지는 수
d = 2  # 나누는 수

while n != 1:
    if n % d != 0:
        d += 1
    else:
        n //= d
        print(d)
        
        
#정답 3
#2 x 8 = 16 은 8 x 2 = 16 과 대칭이다. 
#1 x 16 = 16
#2 x 8 = 16
#4 x 4 = 16
#8 x 2 = 16
#16 x 1 = 16

#가운데 약수를 기준으로 해서 각 등식이 대칭적인 형태를 보이기 때문에, 가운데 약수까지만 '나누어떨어지는지' 확인하면 된다.
#다시 말해 제곱근(가운데 약수)까지만 확인하면 된다. 
#0.5를 곱해 i의 범위를 지정해준 것

import sys

n = int(sys.stdin.readline().rstrip())
for i in range(2, int(n ** 0.5) + 1):
    while n % i == 0:
        print(i)
        n //= i
if n > 1:
    print(n)
##
