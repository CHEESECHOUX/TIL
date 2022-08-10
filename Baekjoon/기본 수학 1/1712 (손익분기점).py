##
#내가 풀어본 코드
#count 수를 input 받지 않고 손익분기점이 존재하는 수를 어떻게 찾는 거지,,
a, b, c = input().split()
count = 0

for cnt in count:
    if c > (a + b*cnt):
        print(cnt)
    else:
        print('-1')
        
        
       
#정답
#손익분기점이 존재하지 않는 값은 고정비용과 관련이 없다.
#c(판매 비용이) b(가변 비용)보다 같거나 작으면 손익이 생기지 않고 손익분기점을 구할 수 있다.

#수익과 비용이 같아지는 코드
#(c * n) = a + (b * n) 

#a + (b * n) = (c * n)
#a = (c * n) - (b * n)
#a = (c - b) * n
#(a // (c - b)) = n


a,b,c = map(int,input().split())

if b >= c:
    print('-1')
else:
    print(a//(c-b)+1) #손익분기점에서 수익을 내려면 한개 더 팔아야함. 정수로 출력받기 위해 몫으로 구함.
##
