##
#내가 푼 코드 : 맞는 것 같은데... 소수를 못 걸러낸다
m = int(input())
n = int(input())

list = []

for i in range(m, n+1):
    cnt = 0
    if i == 1:
        continue
    for j in range(2, i+1):
        if (i % j == 0):
            cnt += 1
        if (cnt == 1):
            list.append(i)

sum_list = sum(list)
min_list = min(list)
print(sum_list)
print(min_list)
##


##
#정답 : 2일경우 list에 추가해줘야 했고, cnt 추가될 경우 for문 break 해줬어야 했다
m = int(input())
n = int(input())
list = []

for i in range(m, n+1):
    cnt = 0
    if i == 1:
        continue
    elif i == 2:
        list.append(i)
    else:
        for j in range(2, i):
            if (i % j == 0):
                cnt += 1
                break
        if cnt == 0:
            list.append(i)

if len(list) == 0:
    print('-1')
else:
    print(sum(list))
    print(min(list))
##
