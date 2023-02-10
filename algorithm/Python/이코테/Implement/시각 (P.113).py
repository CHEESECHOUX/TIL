##
#완전 탐색 유형 : 가능한 경우의 수를 모두 검사
n = int(input())
count = 0

for i in range(n+1):
    for m in range(60):
        for s in range(60):
            if '3' in str(i) + str(m) + str(s):
                count += 1

print(count)
##
