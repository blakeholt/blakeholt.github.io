import os, hashlib, json

class Song:
    def __init__(self,  path, checksum):
        self.path = path
        self.checksum = checksum
    def to_json(self):
        return {
            "path": self.path,
            "checksum": self.checksum
        }

songs = []

files = [f for f in os.listdir('.') if os.path.isfile(f)]
for f in files:
    if (f.endswith(".mp3")):
        print(f)
        songs.append(Song(f, hashlib.md5(open(f,'rb').read()).hexdigest()))


response = json.dumps(songs, default=lambda obj: obj.__dict__, indent=4)
print(response)
with open("manifest.json", "w") as outfile:
    outfile.write(response)
