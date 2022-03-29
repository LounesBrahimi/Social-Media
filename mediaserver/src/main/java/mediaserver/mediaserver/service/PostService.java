package mediaserver.mediaserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mediaserver.mediaserver.dao.PostDAO;
import mediaserver.mediaserver.entity.Post;

@Service
public class PostService {
	@Autowired
	private PostDAO postDAO;
	
    public List<Post> getPosts() {
        return postDAO.findAll();
    }
    
    public Post savePost(Post post) {
        Post savedPost = postDAO.save(post);
        return savedPost;
    }
}
