##
#내가 푼 코드 : 이거도 맞지 않나...?
n = int(input())

x = n // 6 + 1
print(x)
##


##
#정답.....

n = int(input())

nums_pileup = 1  # 벌집의 개수, 1개부터 시작
cnt = 1
while n > nums_pileup : #n이 nums_pileup 변수보다 큰 동안에만 반복
    nums_pileup += 6 * cnt  # 벌집의 개수가 6의 배수로 증가
    cnt += 1  # 반복문을 반복하는 횟수
print(cnt)
##
