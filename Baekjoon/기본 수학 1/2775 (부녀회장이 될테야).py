##
#내가 풀어본 코드 : 여러 테스트 케이스를 어떻게 받지?
t = int(input())

for _ in range(t):
    k = int(input()) #층
    n = int(input()) #호
    for i in range(k-1):
      ho = sum(list(range(0, n+1)))

print(ho)
##

##
#정답: 모든 층의 1호실에 사는 사람의 수가 1명이라는 걸 생각 못했다...

#3층 : 1 5 15 35
#2층 : 1 4 10 20
#1층 : 1 3 6 10
#0층 : 1 2 3 4

t = int(input())

for i in range(t):
    k = int(input()) #층
    n = int(input()) #호 
    people = [i for i in range(1, n+1)] #0층 1부터 n호까지의 각각 사람수

    for x in range(k):
        for y in range(1, n): 
            people[y] += people[y-1] #층별 각 호실의 사람 수를 변경
    print(people[-1]) #가장 마지막 수 출력
##
