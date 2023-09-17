import re

f = open('data', 'r')

data = f.read()

lines = data.split("\n")

indexes = []
for index, line in enumerate(lines): 
	if (re.match('\d\d/\d\d(.)', line) and re.match("9:00", lines[index + 1])):
		indexes.append(index + 5)
		indexes.append(index + 6)

worktimes = []
for i in indexes:
	if (re.match("\d+:\d+", lines[i])):
		worktimes.append(lines[i])

worktimes_csv = worktimes[0]
for i in range(1, len(worktimes)):
	worktimes_csv += "," + worktimes[i]

f.close()

f2 = open('worktimes.csv', 'w')

f2.write(worktimes_csv)
print(worktimes_csv)

f2.close()
