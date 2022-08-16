##
#내가 풀어본 코드 : 모르겠는데요..
t = int(input())
h, w, n = map(int, (input().split()))

floor = 0
num = 0 #호수

for _ in range(t):
    for i in range(n):
        floor += h
        if (h % floor) == 0:
            floor = h // floor
        else:
            floor = (h // floor) + 1
        if (w % 12) == 0:
            num = h // floor
        else:
            num = (h // floor) + 1

print(str(floor)+str(num))
##


##
#정답 : 규칙 찾는게 어려웠다,,

#층수 : n에서 층수를 나눈 나머지
#호수 : n에서 층수를 나눈 몫 + 1
#n이 층수의 배수인 경우, 층수는 입력받은 그대로. 호수는 n에서 층수를 나눈 몫


t = int(input())

for i in range(t):
    h, w, n = map(int, input().split())
    num = n // h + 1 #손님이 방문한 순서를 층수로 나눈 나머지
    floor = n % h
    if n % h == 0:
        num = n // h
        floor = h

print(f'{floor*100+num}')
##
