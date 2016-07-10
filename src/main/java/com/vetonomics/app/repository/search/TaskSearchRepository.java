package com.vetonomics.app.repository.search;

import com.vetonomics.app.domain.Task;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Task entity.
 */
public interface TaskSearchRepository extends ElasticsearchRepository<Task, Long> {
}
