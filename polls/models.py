from django.db import models
from django.contrib.auth.models import User


class UploadImage(models.Model):  
    caption = models.CharField(max_length=200)  
    image = models.ImageField(upload_to='images')  
  
    def __str__(self):  
        return self.caption 

def valid_cid(cid):
    sum_icd = (int(cid[0])*13)+(int(cid[1])*12)+(int(cid[2])*11)+(int(cid[3])*10)+(int(cid[4])*9)+(int(cid[5])*8)+(int(cid[6])*7)+(int(cid[7])*6)+(int(cid[8])*5)+(int(cid[9])*4)+(int(cid[10])*3)+(int(cid[11])*2)
    real_icd = (11-(sum_icd % 11)) % 10
    real_or_not = str(real_icd) == cid[-1]
    return real_or_not


 