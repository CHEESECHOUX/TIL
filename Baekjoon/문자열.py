##
#11654
n = input()
print(ord(n))


##
#11720
#내가 생각한 코드
n = int(input())
num = map(int, input().split())

for i in range(n):
    print(sum(i))
    
#정답
#int는 iterable 하지 않기 때문에 total에 합쳐줄 때 int로서 합쳐주기
n = input()
num = input()
total = 0

for i in num:
    total += int(i)
    print(total)
    

##
#10809
#정답 : 어렵따,, 
#find 함수는 찾는 문자가 문자열 안에 포함되지 않은 경, -1을 출력하지만
#index 함수는 AttributeError를 발생시킴

word = input()
alphabet = list(range(97, 123)) #아스키코드 숫자 범위

for i in alphabet:
    print(word.find(chr(i))) #chr 함수로 숫자를 문자열로 변환 시켜 find 함수를 통해 해당 문자를 숫자로 변환
##
