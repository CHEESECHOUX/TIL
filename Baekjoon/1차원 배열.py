##
#10818
#내가 쓴 코드
n = int(input())
num = list(map(int(input().split())))

print(min(num), max(num))

#정답 : 컴마... 조심
n = int(input())
num = list(map(int, input().split()))

print(min(num), max(num))


##
#2562
#내가 풀어보려 했던 코드 : int와 list 사이에서.. 해결이 안 된다
num_list = []
max = [0]
count = 0

for i in range(9):
    num_list.append(int(input()))

for j in num_list[1:]:
    if j > max:
        max = i
    elif j < max:
        count += 1

print(max, count)

#정답
num = []
for i in range(9):
    num.append(int(input()))

print(max(num))
print(num.index(max(num))+1)


##
#2577
#내가 풀어보려 했던 코드 : 이렇게 하나하나 적는게 아닌 것 같은데...
a = int(input())
b = int(input())
c = int(input())
count1 = 0

result = list((a*b*c).split())

if [1] in result:
    count1 += 1
    
#정답 : 와오 이 문법은 정말 몰랐다
a = int(input()) #150
b = int(input()) #266
c = int(input()) #427

result = list(str(a*b*c)) # [1, 7, 0, 3, 7, 3, 0, 0]

for i in range(10):
    print(result.count(str(i))) # i를 문자열로 바꿔 count 해주기
    
    
##
#3052
#정답 : 어려워...
num = []
for _ in range(10):
    i = (int(input()))
    num.append(i % 42)

num = set(num) #중복 제거
print(len(num)) #리스트 num 길이 출력


##
#1546
#내가 쓴 답
n = int(input())
score = list(map(int, input().split()))
m = max(score)
result = []

for i in score:
    result.append(i/m*100)

print(sum(result)/n)
##
