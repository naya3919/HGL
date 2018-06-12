package com.lol.hgl.bizz;

import java.util.List;

import com.lol.hgl.dto.ggDto;
import com.lol.hgl.dto.memberDto;

public interface AdminBizz {
	
	public int memberAllListCount();
	public List<memberDto> memberAllList(int startPost, int endPost);
	public memberDto memberSelectOne(String memberNickName);
	public int ggCount(String memberNickName);
	public int fwlbCount(String memberNickName);
	public List<ggDto> memberGGList(int startPost, int endPost, String memberNickName);

}
