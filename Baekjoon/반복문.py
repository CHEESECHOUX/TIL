##
#2739
n = int(input())

for i in range(1,10):
    print(n, '*', i, '=', n*i)
    
    
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


#15552
import sys

t = int(input())

for _ in range(1, t+1):
    a, b = map(int, sys.stdin.readline().split())
    print(a+b)
  
  
#2741
n = int(input())

for i in range(1, n+1):
    print(i)

    
#2742
#내가 생각한 답
n = int(input())

for i in range(1, n+1):
    print(int(str(i[::-1])))

#정답
n = int(input())

for i in range(n, 0, -1):
    print(i)
    
    
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

    
#11022
t = int(input())

for i in range(1, t+1):
    a, b = map(int, input().split())
    print('Case #'+str(i)+':', str(a), '+', str(b), '=', a+b)


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
