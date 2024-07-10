from django.db import models
from ckeditor.fields import RichTextField

class Header(models.Model):
    logo = models.ImageField(upload_to='home_images/')

class HomePage(models.Model):
    title = models.CharField(max_length=200)
    message = models.TextField()
    image = models.ImageField(upload_to='home_images/')

    def __str__(self):
        return self.title

class Footer(models.Model):
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=13)
    email = models.CharField(max_length=100)
    moto = models.TextField()

    def __str__(self):
        return self.email
    
class Category(models.Model):
    name = models.CharField(max_length=150)
    description = RichTextField()
    image = models.ImageField(upload_to='categories_images/')

    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField()
    published_date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100, default='Admin')
    excerpt = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, related_name='blogs', null=True)

    def __str__(self):
        return self.title

class Video(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextField()
    video_url = models.URLField()
    published_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, related_name='videos', null=True)

    def __str__(self):
        return self.title

class FAQ(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField()
    follow_ups = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.question

class AboutUs(models.Model):
    title = models.CharField(max_length=200, default='About Us')
    content = RichTextField()
    image = models.ImageField(upload_to='about_us_images/')

    def __str__(self):
        return self.title

class ContactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name