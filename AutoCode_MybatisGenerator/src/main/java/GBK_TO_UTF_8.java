
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class GBK_TO_UTF_8 {
	public static int fileCount = 0;
	
	//�˴��滻��ɵ�model��ı��ش��·�������б����ʽ��ת��
	public static String sourceFileRoot = "/C:/Users/Administrator/Workspaces/AutoCode_SSMGenerator/src/com/autoCode/install/model"; // ��Ҫת���ļ����ڵĸ�Ŀ¼
	//�˴��滻mybatis.generator�����Ŀ�ı���·��
	//public static String rootPath="/C:/Users/Administrator/Workspaces/AutoCode_SSMGenerator/src/com/ga/model/sys/";


	public static String sourceCharset = "gbk"; // Դ�ļ�����
	public static String targetCharset = "utf8"; // Ŀ���ļ�����

	public static void main(String[] args) throws IOException {
		File fileDir = new File(sourceFileRoot);
		convert(fileDir);
		System.out.println("Total Dealed : " + fileCount + "Files");
	}

	public static void convert(File file) throws IOException {
		// ������ļ�����б���ת����д�븲��ԭ�ļ�
		if (file.isFile()) {
			// ֻ����.java��β�Ĵ����ļ�
			if (file.getPath().indexOf(".java") == -1) {
				return;
			}
			String fileName = file.getName();
			InputStreamReader isr = new InputStreamReader(new FileInputStream(
					file), sourceCharset);
			BufferedReader br = new BufferedReader(isr);
			StringBuffer sb = new StringBuffer();
			String line = null;
			while ((line = br.readLine()) != null) {
				// ע��д�뻻�з�
				sb.append(line + "\n");
			}
			br.close();
			isr.close();

			File targetFile = new File(file.getPath());
			OutputStreamWriter osw = new OutputStreamWriter(
					new FileOutputStream(targetFile), targetCharset);
			BufferedWriter bw = new BufferedWriter(osw);
			// ���ַ����ʽһ����д��
			bw.write(sb.toString());
			bw.close();
//			osw.close();
//			String rootPath1=rootPath+fileName;
//			System.out.println(rootPath1);
//			File targetFile1 = new File(rootPath1);
//			File parent = targetFile1.getParentFile(); 
//				if(!parent.exists()){ 
//				   parent.mkdirs();
//				} 
//			OutputStreamWriter osw1 = new OutputStreamWriter(new FileOutputStream(targetFile1), targetCharset);
//			BufferedWriter bw1 = new BufferedWriter(osw1);
//			// ���ַ����ʽһ����д��
//			bw1.write(sb.toString());
//			bw1.close();
//			osw1.close();
			System.out.println("Deal:" + file.getPath());
			fileCount++;
		} else {
			for (File subFile : file.listFiles()) {
				convert(subFile);
			}
		}
	}

}