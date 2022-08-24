##
#내가 푼 코드 : 출력도 똑같이 나오는데 정답 아닌가..?
n = int(input())
nums = list(input().split())
count = 0

for i in range(len(nums)):
    nums[i] = int(nums[i])
    if i / 2 != 0 and i / 3 != 0:
        count += 1
print(count)
##


##
#정답 1
n = int(input())
nums = map(int, input().split())
count = 0

for i in nums:
    error = 0
    if i > 1:
        for x in range(2, i): #2부터 n-1까지
            if i % x == 0: 
                error += 1 #1과 자기자신을 제외한 숫자로 나누어 떨어지면 에러 추가
        if error == 0: #에러가 추가되지 않고 0이라면 소수임
            count += 1 #카운트 추가

print(count)


#정답 2
#nums을 list로 받았다면?
n = int(input())
nums = list(map(int, input().split()))
result = 0

for i in nums:
    cnt = 0
    if i == 1: #1은 소수가 아니기 때문에 건너뜀
        continue
    for j in range(2, i+1):
        if (i % j == 0):
            cnt += 1
    if (cnt == 1):
        result += 1
print(result)


#정답 3
n = int(input())
nums = list(map(int, input().split()))
count = 0

for x in nums:
    for i in range(2, x+1):
        if x % i == 0:
            if x == i:
                count += 1 #2부터 x까지 for문으로 돌면서 x와 나누어 떨어진다면
            break #x에 도달하기 전에 나누어 떨어지는 수를 만난다면

print(count)
