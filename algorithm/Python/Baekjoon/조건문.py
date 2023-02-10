##
#1330
a, b = int(input().split())

if a > b:
    print('>')
elif a < b:
    print('<')
else:
    print('==')
  
  
#9498
score = int(input())

if 90 <= score <= 100:
    print('A')
elif 80 <= score <=89:
    print('B')
elif 60 <= score <= 69:
    print('C')
else:
    print('F')

    
#2753
year = int(input())

if year % 4 == 0 and year % 100 != 0:
    print(1)
elif year % 400 == 0:
    print(1)
else:
    print(0)

    
#14681
x = int(input())
y = int(input())

if x > 0 and y > 0:
    print(1)
elif x > 0 and y < 0:
    print(4)
elif x < 0 and y < 0:
    print(3)
else:
    print(2)

    
#2884 내가 생각한 코드
H, M = map(int, input().split())

if M-45 == M < 0:
    print(H-1, M)
elif M-45 == M > 0:
    print(H, M-45)
    
#정답
H, M = map(int, input().split())

if M > 44:
    print(H, M-45)
elif M < 45 and H > 0:
    print(H-1, M+15)
elif H == 0:
    print(23, M+15)
    
    
#2525 내가 생각한 코드
H, M = map(int, input().split())
T = int(input())

if M+T % 60 == 0:
    print(H+1, 0)
elif M+T > 60:
    print(H+1, M+T-60)
elif M+T < 60:
    print(H, M+T)

#정답
H, M = map(int, input().split())
T = int(input())

H += T // 60
M += T % 60

if M >= 60:
    H += 1
    M -= 60
if H >= 24:
    H -= 24

print(H, M)


#2480 내가 구현하려던 코드 : a,b,c 중에서 가장 큰 값을 
a, b, c = map(int, input().split())

if a==b==c:
    money = 10000+a*1000
if a==b !=c or b==c != a or a==c !=b:
    money = 1000+
if a != b != c:
    money = 
    
#정답
a, b, c = map(int, input().split())

if a == b == c:
    print(10000+a*1000)
elif a == b:
    print(1000+a*100)
elif a == c:
    print(1000+a*100)
elif b == c:
    print(1000+b*100)
else:
    print(100*max(a, b, c))
##
