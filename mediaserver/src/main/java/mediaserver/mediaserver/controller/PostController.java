package mediaserver.mediaserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mediaserver.mediaserver.entity.Post;
import mediaserver.mediaserver.service.PostService;

@RestController
public class PostController {

	@Autowired
	private PostService postService;
	
	@GetMapping("/posts")
    public List<Post> getPosts() {
        return postService.getPosts();
    }
	
    @PostMapping("/post")
	public Post createPost(@RequestBody Post post) {
    	return postService.savePost(post);
	}
}
