##
#2739
n = int(input())

for i in range(1,10):
    print(n, '*', i, '=', n*i)

    
##    
#10950
#생각했던 코드
t = int(input())
a, b = map(int, input().split())

for i in range(t):
    print(a+b)
    
#정답
#테스트 케이스로 입력받은 수. t만큼 반복을 하는 것이 중요하고, 굳이 range 함수로 생성된 숫자 요소를 변수로 선언하여 사용할 필요가 없을 때는 언더바로 표현 가능
t = int(input())

for _ in range(t):
    a, b = map(int, input().split())
    print(a+b)


##    
#8393
#생각했던 코드
n = int(input())

for i in range(1, n):
    print(i+n)
       
#정답
n = int(input())
sum = 0

for i in range(1, n+1):
    sum += i
    
print(sum)


##
#15552
import sys

t = int(input())

for _ in range(1, t+1):
    a, b = map(int, sys.stdin.readline().split())
    print(a+b)
 
  
##    
#2741
n = int(input())

for i in range(1, n+1):
    print(i)


##    
#2742
#내가 생각한 답
n = int(input())

for i in range(1, n+1):
    print(int(str(i[::-1])))

#정답
n = int(input())

for i in range(n, 0, -1):
    print(i)

    
##    
#11021
#내가 생각한 코드 
t = int(input())
start = 0
for start in range(start, start+1):
    print(start)

for i in range(t):
    a, b = map(int, input().split())
    print("Case #"+start+":"+(a+b))
    
#정답
t = int(input())

for i in range(1, t+1):
    a, b = map(int, input().split())
    print('Case #'+str(i)+':', a+b)

    
##    
#11022
t = int(input())

for i in range(1, t+1):
    a, b = map(int, input().split())
    print('Case #'+str(i)+':', str(a), '+', str(b), '=', a+b)

    
##
#2438
#내가 생각한 코드
n = int(input())

for * in range(1, n+1):
    print(*)

#정답
n = int(input())

for i in range(n):
    i += 1
    print('*' * i)

    
##    
#2439
#내가 생각한 코드
n = int(input())

for i in range(n):
    i += 1
    print(''* n-i +'*' * i)
    
#정답
n = int(input())

for i in range(1, n+1):
    print(' '*(n-i) +'*'* i)

    
##
#10871
#내가 생각한 답 : map 함수는 int로 해석할 수 없다고 떴다
n, x = map(int, input().split())
num = map(int, input().split())

for i in range(num):
    if i < x:
        print(i)
        
#정답 : list로 묶어주면 된다!
n, x = map(int, input().split())
num = list(map(int, input().split()))

for i in num:
    if i < x:
        print(i)

        
##
#10952
#정답 : 무한루프 돌려주기
while True:
    a, b = map(int, input().split())
    if a == 0 and b == 0:
        break
    print(a+b)
    
    
##
#10951
#정답 : try에 에러가 날 수 있는 문장을 적고 except에는 에러 발생시 실행할 문장을 작성해주면 된다
while True:
    try:
        a, b = map(int, input().split())
    except:
        break
    print(a+b)
    
    
##
#1110
#정답
n = int(input()) #26이 들어온다고 가정했을 때
num = n
count = 0

while True:
    a = num // 10 #2
    b = num % 10 #6
    c = (a+b) % 10 #8
    num = b*10 + c

    count += 1
    if (num == n):
        break

print(count)
##
