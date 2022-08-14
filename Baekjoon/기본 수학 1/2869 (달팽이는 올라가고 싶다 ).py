##
#내가 풀어본 코드
a, b, v = map(int, input().split())

day = 0
while v < (12 * a) - (12 * b):
    day += 1
    if v >= (12 * a) - (12 * b):
        break

print(day)
##


##
#정답

#하루에 a-b만큼 올라감
#올라가야하는 길이는 v-b (정상에 올라간 후에는 미끄러지지 않기 떄문에)

a, b, v = map(int, input().split())

if (v-b) % (a-b) == 0:
    print((v-b) // (a-b)) #올라가야 하는 길이를 하루에 올라가는 길이만큼 나눔
else:
    print(((v-b) // (a-b)) + 1) #나머지가 0이 아니라면 하루가 더 필요하니까 더해줌
##
