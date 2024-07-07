from django.db import models
from ckeditor.fields import RichTextField

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField()
    published_date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100, default='Admin')
    excerpt = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)

    def __str__(self):
        return self.title


class Video(models.Model):
    title = models.CharField(max_length=200)
    description = RichTextField()
    video_url = models.URLField()
    published_date = models.DateTimeField(auto_now_add=True)

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