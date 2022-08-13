##
#정답 : 와오 어케 하는 건지 감도 안 와따

#홀수번째 줄
#분자 : 1부터 n까지 늘어남
#분모 : n부터 1까지 줄어듦

#짝수번째 줄
#분자 : n부터 1까지 줄어듦
#분모 : 1부터 n까지 늘어남


num = int(input())

line = 0 #입력받은 정수가 몇 번째 라인에 있는지
max_num = 0 #입력된 숫자의 라인에서 제일 큰 숫자

while num > max_num:
    line += 1 #num이 몇 번째 라인에 위치
    max_num += line #해당 사선 라인에서 제일 큰 수 

gap = max_num - num
if line % 2 == 0: #사선 라인이 짝수일 때, 오른쪽 -> 왼쪽으로 숫자가 커짐
    top = line - gap #분자 
    under = gap + 1 #분모
else: #사선 라인이 홀수 일 때, 왼쪽 -> 오른쪽으로 숫자가 커짐
    top = gap + 1 #분자 
    under = line - gap #분모

print(f'{top}/{under}')
##
