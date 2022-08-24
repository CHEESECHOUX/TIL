##
#현재 나이트의 위치
input_data = input()
row = int(input_data[1])
#알파벳으로 주어져있는 y좌표를 아스키코드를 사용해 숫자로 변환
#가로축은 a부터 h까지 존재. 인덱스값을 계산하기 위해 a의 아스키코드 값만큼 빼주고 1부터 출발하므로 1을 더해줌
column = int(ord(input_data[0])) - int(ord('a')) + 1

#나이트가 이동할 수 있는 방향
steps = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]

#8가지 방향에 대해 각 위치로 이동 가능한지 확인
result = 0

for step in steps:
    #이동하고자 하는 위치 확인
    next_row = row + step[0]
    next_colum = column + step[1]
    #해당 위치로 이동이 가능하다면 카운트 증가
    if next_row >= 1 and next_row <= 8 and next_colum >= 1 and next_colum <= 8:
        result += 1

print(result)
##
