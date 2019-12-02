from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class Workplace(models.Model):
    name = models.CharField(verbose_name='name',max_length=255,unique=True)
    user_id = models.IntegerField(verbose_name='user_id', default = 0)
    xlocation = models.FloatField(verbose_name='xlocation')
    ylocation = models.FloatField(verbose_name='ylocation')
    param_1 =  models.BooleanField(verbose_name='param_1',default = False)
    param_2 =  models.BooleanField(verbose_name='param_2',default = False)
    param_3 =  models.BooleanField(verbose_name='param_3',default = False)
    param_4 =  models.BooleanField(verbose_name='param_4',default = False)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    param_1 =  models.BooleanField(verbose_name='param_1',default=False)
    param_2 =  models.BooleanField(verbose_name='param_2',default=False)
    param_3 =  models.BooleanField(verbose_name='param_3',default=False)
    param_4 =  models.BooleanField(verbose_name='param_4',default=False)

    def __str__(self):
        return self.user.username
