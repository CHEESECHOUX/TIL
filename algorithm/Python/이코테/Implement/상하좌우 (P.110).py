##
#좌표이동... 어렵다
n = int(input())
x, y = 1, 1
plans = input().split()

#L, R, U, D 이동방향
#dx, dy 세로로 봤을 때 동, 북, 서, 남
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
#이동 가능한 문자 담기
move_types = ['L', 'R', 'U', 'D']

#이동 계획을 하나씩 확인하기
for plan in plans:
    #이동후 좌표 구하기
    #현재의 이동 계획이 move_types중에서 어떤 것인지 확인해서 move_types에 맞는 dx, dy값을 찾아서 다음 위치값을 설정
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]

    #공간을 벗어나는 경우 무시
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    #이동 수행
    x, y = nx, ny

print(x, y)
##
