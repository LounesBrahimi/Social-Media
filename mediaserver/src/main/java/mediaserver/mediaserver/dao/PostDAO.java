package mediaserver.mediaserver.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mediaserver.mediaserver.entity.Post;

@Repository
public interface PostDAO extends JpaRepository<Post, Long>{

}
