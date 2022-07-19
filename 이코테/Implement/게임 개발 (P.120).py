##
#와오... 너므 어렵따...
#n=row, m=colum
n, m = map(int, input().split())

#방문한 위치를 저장할 배열 선언
d = [[0] * m for _ in range(n)]

#현재 캐릭터의 x, y, 방향 입력받기
x, y, direction = map(int, input().split())
#시작 위치는 방문처리
d[x][y] = 1

#전체 맵 정보 입력받기
array = []
for i in range(n):
    array.append(list(map(int, input().split())))

#북, 동, 남, 서
#서, 북, 동, 남 인데..?
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

#왼쪽으로 회전
def turn_left():
    global direction
    direction -= 1
    if direction == -1:
        direction = 3

#시뮬레이션 시작
count = 1
#각 좌표별 회전한 횟수
turn_time = 0
while True:
    #왼쪽으로 회전
    turn_left()
    #바라보는 방향의 좌표
    nx = x + dx[direction]
    ny = y + dy[direction]
    #회전한 이후 정면에 가보지 않은 칸이 존재한다면 이동
    if d[nx][ny] == 0 and array[nx][ny] == 0:
        d[nx][ny] = 1
        #현재 위치 변경
        x = nx
        y = ny
        #방문 칸수 추가
        count += 1
        #회전 횟수 초기화
        turn_time = 0
        continue
    #회전한 이후에 정면에 가보지 않은 칸이 없거나 바다인 경우
    if turn_time == 4:
        #바라보는 방향은 그대로 두고, 위치만 변경
        nx = x - dx[direction]
        ny = y - dy[direction]
        #뒤로 갈 수 있다면 이동
        if array[nx][ny] == 0:
            x = nx
            y = ny
        #뒤가 바다로 막혀있는 경우
        else:
            break
        turn_time = 0

print(count)
##
